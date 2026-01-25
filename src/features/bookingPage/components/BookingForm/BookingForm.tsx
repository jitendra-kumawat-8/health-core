import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";
import { LocalHospital, Send } from "@mui/icons-material";
import HFTextField from "../../../../../components/HFComponents/HFTextField";
import HFRadio from "../../../../../components/HFComponents/HFRadio";
import HFAutocomplete from "../../../../../components/HFComponents/HFAutocomplete";
import axios from "axios";
import {
  ICU_TYPES,
  YES_NO_OPTIONS,
  ADMISSION_URGENCY_OPTIONS,
  GENDER_OPTIONS,
  CITIES,
  type BookingFormData,
} from "./constants";

export interface BookingFormProps {
  onSubmitSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSubmitSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const methods = useForm<BookingFormData>({
    defaultValues: {
      patientName: "John Doe",
      patientAge: "45",
      gender: "Male",
      diagnosis: "Pneumonia with respiratory distress",
      icuType: "General",
      ventilatorRequired: "Yes",
      oxygenSupportRequired: "Yes",
      expectedDuration: "5",
      admissionUrgency: "Within 24 hrs",
      preferredHospital: "City General Hospital",
      preferredCity: "Mumbai",
      contactName: "Jane Doe",
      phoneNumber: "+919876543210",
      email: "jane.doe@example.com",
      additionalNotes: "Patient requires immediate attention. Family available for consultation.",
    },
  });

  const { handleSubmit, reset, watch } = methods;

  // Helper to find option object from value
  const findOption = (value: string, options: any[]) => {
    if (!value) return null;
    return options.find((opt) => opt.value === value) || null;
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Use Next.js API route (relative path for same-origin request)
      const response = await axios.post("/api/booking/icu", {
        ...data,
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitSuccess(true);
        reset();
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      }
    } catch (error: any) {
      setSubmitError(
        error.response?.data?.message ||
          "Failed to submit booking request. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Paper
        elevation={2}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 3 }}>
          <LocalHospital
            sx={{
              fontSize: 64,
              color: "secondary.main",
              mb: 2,
            }}
          />
        </Box>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 2,
            color: "text.primary",
          }}
        >
          Booking Request Submitted
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          Your ICU booking request has been recorded. Our team will contact you
          shortly.
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setSubmitSuccess(false);
            reset();
          }}
          sx={{
            minWidth: "200px",
          }}
        >
          Submit Another Request
        </Button>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={2}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: "12px",
      }}
    >
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          {submitError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {submitError}
            </Alert>
          )}

          {/* Patient Details Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <LocalHospital sx={{ fontSize: 28, color: "primary.main" }} />
              Patient Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <HFTextField
                  name="patientName"
                  label="Patient Full Name"
                  placeholder="Enter patient's full name"
                  rules={{ required: "Patient name is required" }}
                  componentProps={{
                    size: "medium",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <HFTextField
                  name="patientAge"
                  label="Patient Age"
                  placeholder="Age"
                  type="number"
                  rules={{
                    required: "Patient age is required",
                    min: { value: 0, message: "Age must be a positive number" },
                  }}
                  componentProps={{
                    size: "medium",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <HFRadio
                  name="gender"
                  label="Gender"
                  options={GENDER_OPTIONS}
                  rules={{ required: "Gender is required" }}
                />
              </Grid>
              <Grid item xs={12}>
                <HFTextField
                  name="diagnosis"
                  label="Primary Condition / Diagnosis"
                  placeholder="Enter primary condition or diagnosis"
                  rules={{ required: "Diagnosis is required" }}
                  componentProps={{
                    size: "medium",
                    multiline: true,
                    rows: 2,
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* ICU Requirement Details Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              ICU Requirement Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <HFAutocomplete
                  name="icuType"
                  label="ICU Type"
                  options={ICU_TYPES}
                  placeholder="Select ICU type"
                  rules={{ required: "ICU type is required" }}
                  componentProps={{
                    value: findOption(watch("icuType"), ICU_TYPES),
                  }}
                  getOptionLabel={(option: any) => {
                    if (typeof option === "string") return option;
                    return option?.label || String(option);
                  }}
                  isOptionEqualToValue={(option: any, value: any) => {
                    if (!option || !value) return false;
                    const optValue = typeof option === "string" ? option : option?.value;
                    const valValue = typeof value === "string" ? value : value?.value;
                    return String(optValue) === String(valValue);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <HFRadio
                  name="ventilatorRequired"
                  label="Ventilator Required"
                  options={YES_NO_OPTIONS}
                  rules={{ required: "Please specify if ventilator is required" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <HFRadio
                  name="oxygenSupportRequired"
                  label="Oxygen Support Required"
                  options={YES_NO_OPTIONS}
                  rules={{
                    required: "Please specify if oxygen support is required",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <HFTextField
                  name="expectedDuration"
                  label="Expected Duration (Days)"
                  placeholder="Number of days"
                  type="number"
                  componentProps={{
                    size: "medium",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <HFRadio
                  name="admissionUrgency"
                  label="Admission Urgency"
                  options={ADMISSION_URGENCY_OPTIONS}
                  rules={{ required: "Admission urgency is required" }}
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Hospital Preference Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Hospital Preference
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <HFTextField
                  name="preferredHospital"
                  label="Preferred Hospital Name"
                  placeholder="Enter hospital name (optional)"
                  componentProps={{
                    size: "medium",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <HFAutocomplete
                  name="preferredCity"
                  label="Preferred City"
                  options={CITIES}
                  placeholder="Select city"
                  rules={{ required: "Preferred city is required" }}
                  componentProps={{
                    value: findOption(watch("preferredCity"), CITIES),
                  }}
                  getOptionLabel={(option: any) => {
                    if (typeof option === "string") return option;
                    return option?.label || String(option);
                  }}
                  isOptionEqualToValue={(option: any, value: any) => {
                    if (!option || !value) return false;
                    const optValue = typeof option === "string" ? option : option?.value;
                    const valValue = typeof value === "string" ? value : value?.value;
                    return String(optValue) === String(valValue);
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Contact Details Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Contact Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <HFTextField
                  name="contactName"
                  label="Contact Person Name"
                  placeholder="Enter contact person's name"
                  rules={{ required: "Contact name is required" }}
                  componentProps={{
                    size: "medium",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <HFTextField
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Enter phone number"
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                      message: "Please enter a valid phone number",
                    },
                  }}
                  componentProps={{
                    size: "medium",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <HFTextField
                  name="email"
                  label="Email Address"
                  placeholder="Enter email address (optional)"
                  type="email"
                  componentProps={{
                    size: "medium",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Additional Notes Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Additional Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <HFTextField
                  name="additionalNotes"
                  label="Additional Notes"
                  placeholder="Any additional information you'd like to share..."
                  componentProps={{
                    size: "medium",
                    multiline: true,
                    rows: 4,
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Submit Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
              sx={{
                minWidth: "200px",
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                minHeight: "48px",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </Button>
          </Box>
        </Box>
      </FormProvider>
    </Paper>
  );
};
