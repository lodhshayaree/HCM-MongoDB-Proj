document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const id = params.get('id');

    if (type && id) {
        fetch(`/api/${type}/${id}`)
            .then(response => response.json())
            .then(item => {
                // Generate HTML content based on the item details
                const detailsContent = document.getElementById('detailsContent');
                let html = '';
                switch (type) {
                    case 'Patients':
                        html = `
                            <p>Patient ID: ${item.patientId}</p>
                            <p>Name: ${item.name}</p>
                            <p>Age: ${item.age}</p>
                            <p>Gender: ${item.gender}</p>
                            <p>Address: ${item.address}</p>
                            <p>Phone: ${item.phone}</p>
                            <p>Email: ${item.email}</p>
                            <p>Medical History: ${item.medicalHistory}</p>
                        `;
                        break;

                    case 'Appointments':
                        html = `
                            <p>Patient ID: ${item.patientId}</p>
                            <p>Name: ${item.name}</p>
                            <p>Age: ${item.age}</p>
                            <p>Gender: ${item.gender}</p>
                            <p>Address: ${item.address}</p>
                            <p>Phone: ${item.phone}</p>
                            <p>Email: ${item.email}</p>
                            <p>Medical History: ${item.medicalHistory}</p>
                        `;
                        break;

                    case 'Doctors':
                        html = `
                            <p>Doctor ID: ${item.doctorId}</p>
                            <p>Name: ${item.name}</p>
                            <p>specialization: ${item.specialization}</p>
                            <p>phone: ${item.phone}</p>
                            <p>Phone: ${item.phone}</p>
                            <p>Email: ${item.email}</p>
                            <p>consultation Hours: ${item.consultationHours}</p>
                        `;
                        break;

                    case 'Treatments':
                        html = `
                            <p>Treatment ID: ${item.treatmentId}</p>
                            <p>patient id: ${item.patientId}</p>
                            <p>Doctor id: ${item.doctorId}</p>
                            <p>Treatment Date: ${item.treatmentDate}</p>
                            <p>Diagnosis: ${item.diagnosis}</p>
                            <p>treatment: ${item.treatment}</p>
                            <p>notes: ${item.notes}</p>
                        `;
                        break;

                    case 'Departments':
                        html = `
                            <p>departmrnt Id: ${item.departmentId}</p>
                            <p>Name: ${item.name}</p>
                            <p>head: ${item.head}</p>
                        `;
                        break;

                        
                    // Add cases for Appointments, Doctors, Treatments, and Departments similarly
                    default:
                        html = `<p>No details found</p>`;
                        break;
                }
                detailsContent.innerHTML = html;
            })
            .catch(error => console.error(`Error fetching ${type} details:`, error));
    } else {
        console.error('Type or ID parameters missing');
    }
});
