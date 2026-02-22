import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import { Person, Send } from "@mui/icons-material";
import HFTextField from "../../../../../components/HFComponents/HFTextField";
import HFRadio from "../../../../../components/HFComponents/HFRadio";
import axios from "axios";
import { GENDER_OPTIONS, type RegisterFormData } from "./constants";

export interface RegisterFormProps {
  onSubmitSuccess?: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmitSuccess,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const methods = useForm<RegisterFormData>({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      gender: "",
      areaOfOperation: "",
      medicalId: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await axios.post("/api/register", {
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
          "Failed to submit registration. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="rounded-xl shadow-lg bg-white p-6 md:p-8 text-center">
        <div className="mb-6">
          <Person sx={{ fontSize: 64, color: "#2563eb", mb: 2 }} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Registration Submitted
        </h2>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          Thank you for registering with us! Our team will review your details
          and get in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitSuccess(false);
            reset();
          }}
          className="min-w-[200px] inline-flex items-center justify-center px-4 py-2.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Submit Another Registration
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

          {/* Registration Details */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Person sx={{ fontSize: 28, color: "#2563eb" }} />
              Your Details
            </h2>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-6">
                <HFTextField
                  name="fullName"
                  label="Full Name *"
                  placeholder="Enter your full name"
                  rules={{ required: "Full name is required" }}
                  componentProps={{ size: "medium" }}
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
                  componentProps={{ size: "medium" }}
                />
              </div>
              <div className="col-span-6">
                <HFTextField
                  name="email"
                  label="Email Address *"
                  placeholder="Enter email address"
                  type="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  }}
                  componentProps={{ size: "medium" }}
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
                <HFTextField
                  name="areaOfOperation"
                  label="Area of Operation *"
                  placeholder="e.g. HSR Layout, Bangalore"
                  rules={{ required: "Area of operation is required" }}
                  componentProps={{ size: "medium" }}
                />
              </div>
              <div className="col-span-6">
                <HFTextField
                  name="medicalId"
                  label="Medical ID *"
                  placeholder="Enter your medical registration ID"
                  rules={{ required: "Medical ID is required" }}
                  componentProps={{ size: "medium" }}
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
                  Submit Registration
                </>
              )}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
