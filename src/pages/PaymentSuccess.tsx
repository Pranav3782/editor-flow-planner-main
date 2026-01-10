import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, PartyPopper, Timer } from "lucide-react";

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center animate-bounce">
                        <PartyPopper className="w-10 h-10 text-success" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-foreground">
                    Payment Successful!
                </h1>

                <div className="bg-card border border-border rounded-xl p-6 space-y-4 shadow-sm text-left">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-foreground font-medium">Welcome to EditFlow Pro</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Timer className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Your account will be activated shortly</span>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                    You can now access all premium features. If you don't see the changes immediately, try refreshing the planner.
                </p>

                <div className="pt-4">
                    <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                        <Link to="/planner">Go to Planner</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
