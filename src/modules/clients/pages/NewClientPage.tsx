import { SidebarMenu } from "@/shared/components/Sidebar";
import { useToast } from "@/shared/hooks";
import { getPageTitle } from "@/shared/utils";
import { Ban, Save } from "lucide-react";
import { useState, type SyntheticEvent, type ChangeEvent } from "react";
import { Helmet } from "react-helmet-async";
import { createDocument } from "@/services/firebase/firestore";
import { InputField } from "@/shared/components/InputField";
import { Button } from "@/shared/components/Button";
import { useNavigate } from "react-router-dom";
import { fetchAddressByZip } from "@/shared/utils/fetchAddressByZip";
import { validateClientForm } from "../validators/validateClientForm";
import { formatTaxId } from "@/shared/utils/masks/formatTaxId.ts";
import { formatZipCode } from "@/shared/utils/masks/formatZipCode.ts";

export function NewClientPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    taxId: "",
    birthDate: "",
    gender: "",
    city: "",
    state: "",
    address: "",
    zipCode: "",
    number: "",
  });

  const [loading, setLoading] = useState(false);
  const [zipLoaded, setZipLoaded] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "taxId") {
      newValue = formatTaxId(value);
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleZipCodeChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const zip = formatZipCode(e.target.value);

    setForm((prev) => ({
      ...prev,
      zipCode: zip,
      address: "",
      city: "",
      state: "",
      number: "",
    }));

    const cleanZip = zip.replace(/\D/g, "");

    setZipLoaded(false);

    if (cleanZip.length < 8) {
      return;
    }

    if (cleanZip.length > 8) {
      setErrors((prev) => ({
        ...prev,
        zipCode: "ZIP Code must have 8 digits",
      }));
      return;
    }

    const address = await fetchAddressByZip(cleanZip);

    if (!address) {
      setErrors((prev) => ({
        ...prev,
        zipCode: "Invalid ZIP Code",
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      zipCode: zip,
      address: address.address,
      city: address.city,
      state: address.state,
    }));

    setZipLoaded(true);

    setErrors((prev) => ({
      ...prev,
      zipCode: "",
    }));
  };

  const handleClientCreation = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validationErrors = validateClientForm(form);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setLoading(false);
        return;
      }

      const now = new Date().toISOString();

      const client = {
        ...form,
        createdAt: now,
        updatedAt: now,
      };

      await createDocument("clients", client as never);

      addToast({
        message: "Client created successfully",
        variant: "success",
        duration: 3000,
      });

      navigate("/clients");
    } catch (err: unknown) {
      console.error("Failed to create client", err);

      addToast({
        message: "Failed to create client. Please try again.",
        variant: "error",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle("New Client")}</title>
      </Helmet>

      <SidebarMenu>
        <main className="pt-10 md:pt-0">
          <div className="mx-auto w-full">
            <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold tracking-tight">New Client</h1>

                <p className="text-muted-foreground text-sm">
                  Add a new client to your database. Provide personal and contact details to manage your relationships.
                </p>
              </div>
            </div>

            <form onSubmit={handleClientCreation} className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <InputField
                    label="First Name"
                    name="firstName"
                    placeholder="John"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    type="text"
                    errorMessage={errors.firstName}
                  />
                </div>

                <div className="flex-1">
                  <InputField
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    type="text"
                    errorMessage={errors.lastName}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <InputField
                    label="Email"
                    name="email"
                    placeholder="client@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    errorMessage={errors.email}
                  />
                </div>

                <div className="flex-1">
                  <InputField
                    label="Phone"
                    name="phone"
                    placeholder="+55 11 99999-9999"
                    value={form.phone}
                    onChange={handleChange}
                    type="text"
                    errorMessage={errors.phone}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <InputField
                    label="Tax ID"
                    name="taxId"
                    placeholder="000.000.000-00"
                    value={form.taxId}
                    onChange={handleChange}
                    required
                    type="text"
                    errorMessage={errors.taxId}
                  />
                </div>

                <div className="flex-1">
                  <InputField
                    label="Birth Date"
                    name="birthDate"
                    value={form.birthDate}
                    onChange={handleChange}
                    required
                    type="date"
                    errorMessage={errors.birthDate}
                  />
                </div>
              </div>

              <div>
                <label className="text-foreground mb-1 block w-full text-left" htmlFor="gender">
                  Gender
                </label>

                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className={`shadow-border border-input text-foreground ${errors.gender ? "border-red-500" : ""} focus:border-primary focus:ring-ring bg-card w-full appearance-none rounded border py-2 pl-2 leading-tight shadow-xs transition-all hover:cursor-pointer focus:ring focus:outline-none`}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender}</p>}
              </div>

              <InputField
                label="Zip Code"
                name="zipCode"
                placeholder="00000-000"
                value={form.zipCode}
                onChange={handleZipCodeChange}
                type="text"
                errorMessage={errors.zipCode}
              />

              <InputField
                label="Address"
                name="address"
                placeholder="Street"
                value={form.address}
                onChange={handleChange}
                type="text"
                disabled
                errorMessage={errors.address}
              />

              <InputField
                label="Number"
                name="number"
                placeholder="123"
                value={form.number}
                onChange={handleChange}
                type="text"
                disabled={!zipLoaded}
                required={zipLoaded}
                errorMessage={errors.number}
              />

              <div className="flex gap-4">
                <div className="flex-1">
                  <InputField
                    label="City"
                    name="city"
                    placeholder="São Paulo"
                    value={form.city}
                    onChange={handleChange}
                    type="text"
                    disabled
                    errorMessage={errors.city}
                  />
                </div>

                <div className="flex-1">
                  <InputField
                    label="State"
                    name="state"
                    placeholder="SP"
                    value={form.state}
                    onChange={handleChange}
                    type="text"
                    disabled
                    errorMessage={errors.state}
                  />
                </div>
              </div>

              <div className="border-border mt-12 flex w-full flex-col gap-2 border-t-2 pt-4 md:flex-row md:justify-end">
                <div className="w-full md:max-w-32">
                  <Button
                    onClick={() => navigate("/clients")}
                    type="button"
                    variant="danger"
                    disabled={loading}
                    loadingText="Cancelling"
                    leftAddon={<Ban size={20} />}
                  >
                    Cancel
                  </Button>
                </div>

                <div className="w-full md:max-w-32">
                  <Button
                    type="submit"
                    isLoading={loading}
                    disabled={loading}
                    loadingText="Saving"
                    leftAddon={<Save size={20} />}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </SidebarMenu>
    </>
  );
}
