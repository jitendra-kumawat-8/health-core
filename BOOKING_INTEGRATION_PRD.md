# ICU Booking Page – Product Requirements Document (PRD)

## 1. Objective
Build an **ICU Booking page** that allows users to submit ICU-related booking requests.
All submitted booking data must be **stored in an Excel file** for operational use.

The system is designed for:
- Low operational overhead
- Easy review by staff
- No complex backend systems initially

---

## 2. Scope

### In Scope
- ICU booking form UI
- Data validation
- Excel file creation / update
- Append new bookings as rows
- Timestamped entries

### Out of Scope (Phase 1)
- Online payments
- Real-time bed availability
- Automated confirmations
- Admin dashboard
- User authentication

---

## 3. Target Users
- Family members of patients
- Caregivers
- Hospital coordinators
- Emergency support staff (non-critical use)

---

## 4. Booking Page Functional Requirements

### 4.1 Booking Page Overview
The booking page allows users to:
- Enter patient details
- Select ICU requirements
- Provide contact information
- Submit a booking request

Submission results in:
- Data appended to an Excel file
- Confirmation UI message to the user

---

## 5. Form Fields

### 5.1 Patient Details
| Field | Required |
|-----|---------|
| Patient Full Name | Yes |
| Patient Age | Yes |
| Gender | Yes |
| Primary Condition / Diagnosis | Yes |

---

### 5.2 ICU Requirement Details
| Field | Required |
|-----|---------|
| ICU Type (General / Cardiac / Neuro / Neonatal) | Yes |
| Ventilator Required (Yes / No) | Yes |
| Oxygen Support Required (Yes / No) | Yes |
| Expected Duration (Days) | Optional |
| Admission Urgency (Immediate / Within 24 hrs / Planned) | Yes |

---

### 5.3 Hospital Preference
| Field | Required |
|-----|---------|
| Preferred Hospital Name | Optional |
| Preferred City | Yes |

---

### 5.4 Contact Details
| Field | Required |
|-----|---------|
| Contact Person Name | Yes |
| Phone Number | Yes |
| Email Address | Optional |

---

### 5.5 Additional Notes
| Field | Required |
|-----|---------|
| Additional Information | Optional |

---

## 6. Submission Behavior

1. User fills the form
2. Client-side validation occurs
3. On submit:
   - Data is sent to backend API
   - Backend appends data to Excel file
4. User sees confirmation message:
   > “Your ICU booking request has been recorded. Our team will contact you shortly.”

---

## 7. Excel Integration Requirements

### 7.1 Excel File Format
- File type: `.xlsx`
- Stored on server or secure cloud storage
- Single sheet named: `ICU_Bookings`

---

### 7.2 Excel Columns (Exact Order)

| Column Name |
|-----------|
| Timestamp |
| Patient Name |
| Patient Age |
| Gender |
| Diagnosis |
| ICU Type |
| Ventilator Required |
| Oxygen Support Required |
| Expected Duration (Days) |
| Admission Urgency |
| Preferred Hospital |
| Preferred City |
| Contact Name |
| Phone Number |
| Email |
| Additional Notes |

---

### 7.3 Data Rules
- Each booking = **one new row**
- Timestamp auto-generated on backend
- No overwriting of existing rows
- Append-only behavior

---

## 8. Backend Responsibilities (High-Level)

- Accept booking payload (JSON)
- Validate required fields
- Create Excel file if not exists
- Append new row if file exists
- Save file safely

Recommended backend stack:
- Node.js / .NET
- Excel handling library (e.g. `xlsx`, `exceljs`, or EPPlus)

---

## 9. Error Handling

### Client Side
- Required field validation
- Proper error messages per field

### Server Side
- If Excel write fails:
  - Return error response
  - Do not show partial success
- Log failed attempts for manual follow-up

---

## 10. UX Guidelines

- Clear “ICU Booking” title
- Calm, reassuring tone
- No alarmist language
- Large input fields for mobile users
- Disable submit button while processing

---

## 11. Security & Privacy

- Excel file access restricted to authorized staff
- No public access to Excel file
- Data used only for booking coordination
- No analytics tracking on form fields

---

## 12. Non-Goals

- No real-time ICU availability checks
- No automated SMS or email confirmations
- No multi-step booking wizard (single page only)

---

## 13. Success Criteria

- Booking entries reliably appear in Excel
- No data loss
- Form is easy to complete under stress
- Operations team can easily filter and review Excel data
