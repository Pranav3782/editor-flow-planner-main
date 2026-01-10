import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Terms = () => {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 relative z-10">
                {/* Header */}
                <div className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-12 sm:h-20 flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all group px-3 py-1.5 rounded-full hover:bg-card/50">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Back to Home</span>
                        </Link>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground hidden sm:block">Legal Documentation</span>
                            <div className="h-4 w-px bg-border/50 hidden sm:block" />
                            <img src="/logo.png" alt="EditFlow" className="h-6 w-auto opacity-90" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
                            <span>Last updated: January 10, 2026</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Please read these terms carefully before using EditFlow.
                        </p>
                    </div>

                    <div className="space-y-16">
                        <section className="relative pl-8 sm:pl-0">
                            <div className="hidden sm:flex absolute -left-12 top-1 w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm text-sm font-semibold text-muted-foreground">
                                1
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree to be bound by these Terms, you may not access or use our services.
                            </p>
                        </section>

                        <section className="relative pl-8 sm:pl-0">
                            <div className="hidden sm:flex absolute -left-12 top-1 w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm text-sm font-semibold text-muted-foreground">
                                2
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Intellectual Property Rights</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.
                            </p>
                        </section>

                        <section className="relative pl-8 sm:pl-0">
                            <div className="hidden sm:flex absolute -left-12 top-1 w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm text-sm font-semibold text-muted-foreground">
                                3
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">User Representations</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                By using the Site, you represent and warrant that:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "All registration information you submit will be true, accurate, current, and complete.",
                                    "You will maintain the accuracy of such information and promptly update such registration information as necessary."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-muted-foreground text-lg">
                                        <span className="w-6 h-6 rounded-full bg-success/10 text-success flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="relative pl-8 sm:pl-0">
                            <div className="hidden sm:flex absolute -left-12 top-1 w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm text-sm font-semibold text-muted-foreground">
                                4
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Prohibited Activities</h3>
                            <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/10 text-muted-foreground">
                                <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    Warning
                                </h4>
                                <p className="leading-relaxed text-lg">
                                    You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                                </p>
                            </div>
                        </section>

                        <section className="relative pl-8 sm:pl-0">
                            <div className="hidden sm:flex absolute -left-12 top-1 w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm text-sm font-semibold text-muted-foreground">
                                5
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Contact Us</h3>
                            <div className="rounded-2xl bg-secondary/30 p-8 border border-border/50">
                                <p className="text-lg text-muted-foreground mb-6">
                                    In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us.
                                </p>
                                <Button size="lg" className="gap-2" onClick={() => {
                                    navigator.clipboard.writeText("business@entrext.in");
                                    toast.success("Email copied to clipboard!");
                                }}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    Contact Support
                                </Button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
