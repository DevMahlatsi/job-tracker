export interface appDetailsType {
    company: string;
    role: string;
    status: "Applied" | "Interview" | "Offer" | "Rejected" | "Ghosted";
    date: Date;
    note: string;
}