document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch and display details for a specific entity type
    function fetchAndDisplayDetails(entityType, entityId) {
        fetch(`/api/${entityType}/${entityId}`)
            .then(response => response.json())
            .then(data => {
                // Assuming you have a details.html page structured to display data
                // Here we redirect to details.html with query parameters to display the data
                window.location.href = `details.html?type=${entityType}&id=${entityId}`;
            })
            .catch(error => console.error(`Error fetching ${entityType} details:`, error));
    }

    // Function to fetch and display patient data
    function fetchPatients() {
        fetch('/api/Patients')
            .then(response => response.json())
            .then(patients => {
                const patientSelect = document.getElementById('patientSelect');
                patientSelect.innerHTML = '';
                patients.forEach(patient => {
                    const option = document.createElement('option');
                    option.value = patient._id;
                    option.textContent = `Patient ID: ${patient.patientId}`;
                    patientSelect.appendChild(option);
                });
                document.getElementById('patientDropdown').style.display = 'block';
            })
            .catch(error => console.error('Error fetching patients:', error));
    }

    // Function to fetch and display appointments data
    function fetchAppointments() {
        fetch('/api/Appointments')
            .then(response => response.json())
            .then(appointments => {
                const appointmentSelect = document.getElementById('appointmentSelect');
                appointmentSelect.innerHTML = '';
                appointments.forEach(appointment => {
                    const option = document.createElement('option');
                    option.value = appointment._id;
                    option.textContent = `Appointment ID: ${appointment.appointmentId}`;
                    appointmentSelect.appendChild(option);
                });
                document.getElementById('appointmentDropdown').style.display = 'block';
            })
            .catch(error => console.error('Error fetching appointments:', error));
    }

    // Function to fetch and display doctors data
    function fetchDoctors() {
        fetch('/api/Doctors')
            .then(response => response.json())
            .then(doctors => {
                const doctorSelect = document.getElementById('doctorSelect');
                doctorSelect.innerHTML = '';
                doctors.forEach(doctor => {
                    const option = document.createElement('option');
                    option.value = doctor._id;
                    option.textContent = `Doctor ID: ${doctor.doctorId}`;
                    doctorSelect.appendChild(option);
                });
                document.getElementById('doctorDropdown').style.display = 'block';
            })
            .catch(error => console.error('Error fetching doctors:', error));
    }

    // Function to fetch and display treatments data
    function fetchTreatments() {
        fetch('/api/Treatments')
            .then(response => response.json())
            .then(treatments => {
                const treatmentSelect = document.getElementById('treatmentSelect');
                treatmentSelect.innerHTML = '';
                treatments.forEach(treatment => {
                    const option = document.createElement('option');
                    option.value = treatment._id;
                    option.textContent = `Treatment ID: ${treatment.treatmentId}`;
                    treatmentSelect.appendChild(option);
                });
                document.getElementById('treatmentDropdown').style.display = 'block';
            })
            .catch(error => console.error('Error fetching treatments:', error));
    }

    // Function to fetch and display departments data
    function fetchDepartments() {
        fetch('/api/Departments')
            .then(response => response.json())
            .then(departments => {
                const departmentSelect = document.getElementById('departmentSelect');
                departmentSelect.innerHTML = '';
                departments.forEach(department => {
                    const option = document.createElement('option');
                    option.value = department._id;
                    option.textContent = `Department ID: ${department.departmentId}`;
                    departmentSelect.appendChild(option);
                });
                document.getElementById('departmentDropdown').style.display = 'block';
            })
            .catch(error => console.error('Error fetching departments:', error));
    }

    // Event listeners for entity select dropdowns
    document.getElementById('patientSelect').addEventListener('change', () => {
        const patientId = document.getElementById('patientSelect').value;
        fetchAndDisplayDetails('Patients', patientId);
    });

    document.getElementById('appointmentSelect').addEventListener('change', () => {
        const appointmentId = document.getElementById('appointmentSelect').value;
        fetchAndDisplayDetails('Appointments', appointmentId);
    });

    document.getElementById('doctorSelect').addEventListener('change', () => {
        const doctorId = document.getElementById('doctorSelect').value;
        fetchAndDisplayDetails('Doctors', doctorId);
    });

    document.getElementById('treatmentSelect').addEventListener('change', () => {
        const treatmentId = document.getElementById('treatmentSelect').value;
        fetchAndDisplayDetails('Treatments', treatmentId);
    });

    document.getElementById('departmentSelect').addEventListener('change', () => {
        const departmentId = document.getElementById('departmentSelect').value;
        fetchAndDisplayDetails('Departments', departmentId);
    });

    // Fetch initial data on page load
    fetchPatients();
    fetchAppointments();
    fetchDoctors();
    fetchTreatments();
    fetchDepartments();

   
    
});

