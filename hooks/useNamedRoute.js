import { page } from "@/lib/routes";
import { useRouter } from 'next/navigation';

export const useNamedRoute = () => {
    const router = useRouter();

    return (alias, params = {}) => {
        if (page[alias]) {
            router.push(page[alias](params));
        } else {
            throw new Error(`Route not found for alias: ${alias}`);
        }
    };
};
