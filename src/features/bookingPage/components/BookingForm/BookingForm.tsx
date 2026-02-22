import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import {
  LocalHospital,
  Send,
  CalendarMonth,
  Business,
} from "@mui/icons-material";
import HFTextField from "../../../../../components/HFComponents/HFTextField";
import HFRadio from "../../../../../components/HFComponents/HFRadio";
import HFAutocomplete from "../../../../../components/HFComponents/HFAutocomplete";
import axios from "axios";
import {
  GENDER_OPTIONS,
  type BookingFormData,
  SERVICE_TYPE_OPTIONS,
} from "./constants";
import HFDatePicker from "@/components/HFComponents/HFDatePicker";
import HFTimePicker from "@/components/HFComponents/HFTimePicker";

export interface BookingFormProps {
  onSubmitSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSubmitSuccess }) => {
  const router = useRouter();
  const prefilledService =
    typeof router.query.service === "string" ? router.query.service : "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const methods = useForm<BookingFormData>({
    defaultValues: {
      patientName: "",
      patientAge: "",
      gender: "",
      serviceType: prefilledService,
      diagnosis: "",
      visitDate: "",
      visitTime: "",
      preferredHospital: "",
      address: "",
      phoneNumber: "",
      email: "",
      additionalNotes: "",
    },
  });

  const { handleSubmit, reset, watch, setValue } = methods;

  useEffect(() => {
    if (router.isReady && typeof router.query.service === "string") {
      setValue("serviceType", router.query.service);
    }
  }, [router.isReady, router.query.service, setValue]);

  const findOption = (value: string, options: any[]) => {
    if (!value) return null;
    return options.find((opt) => opt.value === value) || null;
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
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
      <div className="rounded-xl shadow-lg bg-white p-6 md:p-8 text-center">
        <div className="mb-6">
          <LocalHospital sx={{ fontSize: 64, color: "#2563eb", mb: 2 }} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Booking Request Submitted
        </h2>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          Your booking request has been recorded. Our team will contact you
          shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitSuccess(false);
            reset();
          }}
          className="min-w-[200px] inline-flex items-center justify-center px-4 py-2.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl shadow-lg bg-white p-6 md:p-8">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {submitError && (
            <div
              className="mb-6 p-4 rounded-lg border border-red-200 bg-red-50 text-red-800 text-sm"
              role="alert"
            >
              {submitError}
            </div>
          )}

          {/* Patient Details Section */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <LocalHospital sx={{ fontSize: 28, color: "#2563eb" }} />
              Patient Details
            </h2>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-6">
                <HFTextField
                  name="patientName"
                  label="Patient Full Name *"
                  placeholder="Enter patient's full name"
                  rules={{ required: "Patient name is required" }}
                  componentProps={{
                    size: "medium",
                  }}
                />
              </div>
              <div className="col-span-6">
                <HFTextField
                  name="phoneNumber"
                  label="Phone Number *"
                  placeholder="Enter phone number"
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value:
                        /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                      message: "Please enter a valid phone number",
                    },
                  }}
                  componentProps={{
                    size: "medium",
                  }}
                />
              </div>
              <div className="col-span-6">
                <HFTextField
                  name="patientAge"
                  label="Patient Age *"
                  placeholder="Age"
                  type="number"
                  rules={{
                    required: "Patient age is required",
                    min: { value: 0, message: "Age must be a positive number" },
                    max: { value: 150, message: "Please enter a valid age" },
                  }}
                  componentProps={{
                    size: "medium",
                  }}
                />
              </div>
              <div className="col-span-6">
                <HFRadio
                  name="gender"
                  label="Gender *"
                  options={GENDER_OPTIONS}
                  rules={{ required: "Gender is required" }}
                />
              </div>
              <div className="col-span-6">
                <HFAutocomplete
                  name="serviceType"
                  label="Service Type *"
                  options={SERVICE_TYPE_OPTIONS}
                  rules={{ required: "Service type is required" }}
                  componentProps={{
                    size: "medium",
                  }}
                />
              </div>
              <div className="col-span-6">
                <HFTextField
                  name="email"
                  label="Email Address"
                  placeholder="Enter email address (optional)"
                  type="email"
                  rules={{
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  }}
                  componentProps={{
                    size: "medium",
                  }}
                />
              </div>
              <div className="col-span-12">
                <HFTextField
                  name="diagnosis"
                  label="Primary Condition / Diagnosis *"
                  placeholder="Enter primary condition or diagnosis"
                  rules={{ required: "Diagnosis is required" }}
                  componentProps={{
                    size: "medium",
                    multiline: true,
                    rows: 2,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Visit Preference Section */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CalendarMonth sx={{ fontSize: 28, color: "#2563eb" }} />
              Visit Preference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-6">
                <HFDatePicker
                  name="visitDate"
                  label="Visit Date *"
                  rules={{
                    required: "Visit date is required",
                    validate: (value: any) => {
                      if (!value) return "Visit date is required";
                      const selected = new Date(value);
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      if (selected < today) return "Visit date cannot be in the past";
                      return true;
                    },
                  }}
                />
              </div>
              <div className="md:col-span-6">
                <HFTimePicker
                  name="visitTime"
                  label="Visit Time *"
                  rules={{
                    required: "Visit time is required",
                  }}
                />
              </div>
              <div className="md:col-span-12">
                <HFTextField
                  name="address"
                  label="Visit Address *"
                  placeholder="Enter full address for the visit"
                  rules={{ required: "Address is required" }}
                  componentProps={{
                    size: "medium",
                    multiline: true,
                    rows: 3,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Hospital Preference Section */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Business sx={{ fontSize: 28, color: "#2563eb" }} />
              Hospital Preference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-6">
                <HFTextField
                  name="preferredHospital"
                  label="Preferred Hospital Name"
                  placeholder="Enter hospital name (optional)"
                  componentProps={{
                    size: "medium",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="min-w-[200px] min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <CircularProgress size={20} sx={{ color: "white" }} />
                  Submitting...
                </>
              ) : (
                <>
                  <Send sx={{ fontSize: 20 }} />
                  Submit Booking Request
                </>
              )}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
