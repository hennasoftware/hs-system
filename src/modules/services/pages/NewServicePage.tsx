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

export function NewServicePage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    shortDescription: "",
    price: "",
    promotionalPrice: "",
    promotionalPriceStart: "",
    promotionalPriceEnd: "",
    status: "active",
  });
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceCreation = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const now = new Date().toISOString();
      const service = {
        ...form,
        createdAt: now,
        updatedAt: now,
      };
      await createDocument("services", service as never);
      addToast({
        message: "Service created successfully",
        variant: "success",
        duration: 3000,
      });
      navigate("/services");
    } catch (err: unknown) {
      console.error("Failed to create service", err);
      addToast({
        message: "Failed to create service. Please, try again.",
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
        <title>{getPageTitle("New Service")}</title>
      </Helmet>

      <SidebarMenu>
        <main className="pt-10 md:pt-0">
          <div className="mx-auto w-full">
            <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold tracking-tight">New Service</h1>
                <p className="text-muted-foreground text-sm">
                  Create a new service offering. Provide details such as name, description, and pricing to add it to
                  your catalog.
                </p>
              </div>
            </div>

            <form onSubmit={handleServiceCreation} className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <InputField
                    label="Name"
                    name="name"
                    placeholder="Web Design, SEO audit, Montlhy Maintenance"
                    value={form.name}
                    onChange={handleChange}
                    required
                    type="text"
                  />
                </div>

                <div className="flex-1">
                  <div>
                    <label className="text-foreground mb-1 block w-full text-left" htmlFor="status">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      className="shadow-border border-input text-foreground placeholder:text-placeholder focus:border-primary focus:ring-ring bg-card w-full appearance-none rounded border py-2 pl-2 leading-tight shadow-xs transition-all hover:cursor-pointer focus:ring focus:outline-none"
                      value={form.status}
                      onChange={handleChange}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              <InputField
                label="Short Description"
                name="shortDescription"
                placeholder="Quick overview of the service (max 1-2 sentences)"
                value={form.shortDescription}
                onChange={handleChange}
                required
                type="text"
              />

              <div>
                <label className="text-foreground mb-1 block w-full text-left" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="shadow-border border-input text-foreground placeholder:text-placeholder focus:border-primary focus:ring-ring bg-card w-full appearance-none rounded border py-2 pl-2 leading-tight shadow-xs transition-all focus:ring focus:outline-none"
                  value={form.description}
                  placeholder="Describe what's included, deliverables, timeline and any requirements"
                  onChange={handleChange}
                  required
                  rows={3}
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <InputField
                    label="Price"
                    name="price"
                    placeholder="500.00"
                    value={form.price}
                    onChange={handleChange}
                    required
                    type="number"
                  />
                </div>

                <div className="flex-1">
                  <InputField
                    label="Promotional Price"
                    name="promotionalPrice"
                    placeholder="450.00 (optional)"
                    value={form.promotionalPrice}
                    onChange={handleChange}
                    type="number"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <InputField
                    label="Promo Start"
                    name="promotionalPriceStart"
                    value={form.promotionalPriceStart}
                    onChange={handleChange}
                    type="date"
                  />
                </div>

                <div className="flex-1">
                  <InputField
                    label="Promo End"
                    name="promotionalPriceEnd"
                    value={form.promotionalPriceEnd}
                    onChange={handleChange}
                    type="date"
                  />
                </div>
              </div>

              <div className="border-border mt-12 flex w-full flex-col gap-2 border-t-2 pt-4 md:flex-row md:justify-end">
                <div className="w-full md:max-w-32">
                  <Button
                    onClick={() => navigate("/services")}
                    type={"button"}
                    variant="danger"
                    disabled={loading}
                    loadingText={"Cancelling"}
                    leftAddon={<Ban size={20} />}
                  >
                    Cancel
                  </Button>
                </div>

                <div className="w-full md:max-w-32">
                  <Button
                    type={"submit"}
                    isLoading={loading}
                    disabled={loading}
                    loadingText={"Saving"}
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
