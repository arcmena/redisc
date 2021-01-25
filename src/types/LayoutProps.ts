export interface BasicFormProps {
    onFinish?: (values: any) => void;
    onChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
    onSubmit: (e: React.FormEvent) => Promise<void>;
}
