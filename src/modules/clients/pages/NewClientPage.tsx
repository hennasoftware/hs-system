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

export function NewClientPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: "active",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClientCreation = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
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
                  Add a new client to your database. Provide contact details and additional information to manage your
                  relationships.
                </p>
              </div>
            </div>

            <form onSubmit={handleClientCreation} className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <InputField
                    label="Name"
                    name="name"
                    placeholder="John Doe"
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
                      value={form.status}
                      onChange={handleChange}
                      className="shadow-border border-input text-foreground placeholder:text-placeholder focus:border-primary focus:ring-ring bg-card w-full appearance-none rounded border py-2 pl-2 leading-tight shadow-xs transition-all hover:cursor-pointer focus:ring focus:outline-none"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
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
                  />
                </div>

                <div className="flex-1">
                  <InputField
                    label="Phone"
                    name="phone"
                    placeholder="+55 12 99999-9999"
                    value={form.phone}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>

              <InputField
                label="Company"
                name="company"
                placeholder="Company name (optional)"
                value={form.company}
                onChange={handleChange}
                type="text"
              />

              <div>
                <label className="text-foreground mb-1 block w-full text-left" htmlFor="notes">
                  Notes
                </label>

                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Additional notes about the client"
                  className="shadow-border border-input text-foreground placeholder:text-placeholder focus:border-primary focus:ring-ring bg-card w-full appearance-none rounded border py-2 pl-2 leading-tight shadow-xs transition-all focus:ring focus:outline-none"
                />
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
