import { useNavigate } from "react-router";
import { toast } from "sonner";
import { AuthForm } from "../components/AuthForm";
import { AuthTabs } from "../components/AuthTabs";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = async (email: string, password: string) => {
    const response = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role: "user" }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.message || "Inscription échouée. Cet email existe peut-être déjà.");
    }

    toast.success("Inscription réussie");
    navigate("/signin");
  };

  return (
    <div>
      <AuthTabs />
      <div className="flex justify-center">
        <AuthForm
          title="Inscription"
          submitLabel="Inscription"
          submittingLabel="Inscription en cours..."
          onSubmit={handleSubmit}
          bottomText="Déjà un compte ?"
          bottomLink="/signin"
          bottomLinkLabel="Connexion"
        />
      </div>
    </div>
  );
}
