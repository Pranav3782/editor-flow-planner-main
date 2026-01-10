import Footer from "@/components/Footer"; // Actually footer is removed per previous step, but I should check if I need it or not. The previous step removed it. I will NOT include it.
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Privacy = () => {
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
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            We value your trust. This policy outlines how we collect, use, and protect your personal information at EditFlow.
                        </p>
                    </div>

                    <div className="space-y-16">
                        <section className="relative pl-8 sm:pl-0">
                            <div className="hidden sm:flex absolute -left-12 top-1 w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm text-sm font-semibold text-muted-foreground">
                                1
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Introduction</h3>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Welcome to EditFlow. We respect your privacy and are committed to protecting your personal data.
                                    This privacy policy will inform you as to how we look after your personal data when you visit our website
                                    and tell you about your privacy rights and how the law protects you.
                                </p>
                            </div>
                        </section>

                        <section className="relative pl-8 sm:pl-0">
                            <div className="hidden sm:flex absolute -left-12 top-1 w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm text-sm font-semibold text-muted-foreground">
                                2
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-6">Data We Collect</h3>
                            <p className="text-muted-foreground text-lg mb-6">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </div>
                                    <strong className="block text-foreground text-lg mb-2">Identity Data</strong>
                                    <span className="text-muted-foreground">First name, last name, username or similar identifier.</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <strong className="block text-foreground text-lg mb-2">Contact Data</strong>
                                    <span className="text-muted-foreground">Email address and telephone number.</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <strong className="block text-foreground text-lg mb-2">Technical Data</strong>
                                    <span className="text-muted-foreground">Internet protocol (IP) address, login data, browser type and version, time zone setting, operating system and platform.</span>
                                </div>
                            </div>
                        </section>

                        <section className="relative pl-8 sm:pl-0">
                            <div className="hidden sm:flex absolute -left-12 top-1 w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm text-sm font-semibold text-muted-foreground">
                                3
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">How We Use Your Data</h3>
                            <p className="text-muted-foreground text-lg mb-6">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Where we need to perform the contract we are about to enter into or have entered into with you.",
                                    "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.",
                                    "Where we need to comply with a legal or regulatory obligation."
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
                            <h3 className="text-2xl font-bold text-foreground mb-4">Contact Us</h3>
                            <div className="rounded-2xl bg-secondary/30 p-8 border border-border/50">
                                <p className="text-lg text-muted-foreground mb-6">
                                    If you have any questions about this privacy policy or our privacy practices, please contact us.
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

export default Privacy;
