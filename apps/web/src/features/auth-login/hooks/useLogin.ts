import { User } from "@/entities/user";
import { useAuthActions } from "@/features/auth-store";
import { AuthLoginDto } from "@cloud/shared";
import { useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useLoginMutation } from "./useLoginMutation";

export const useLogin = () => {
    const { login } = useAuthActions();

    const navigate = useNavigate({ from: location.pathname });
    const { handleLogin, isPending } = useLoginMutation();

    const handleLoginSubmit = useCallback(
        async (credentials: AuthLoginDto) => {
            try {
                const result = await handleLogin(credentials);

                if (!result.success || !result.data) {
                    toast.error("Login failed");
                    console.error("Login error:", result.error);
                    return;
                }

                const { user, token, tokenExpiration } = result.data.body;

                const localUser = User.fromApiResponse(user);

                await login({ user: localUser, token, tokenExpiration });
                toast("Login success");
                await navigate({ to: "/" });
            } catch (error) {
                toast.error("Unexpected error occurred");
                console.error("Login error:", error);
            }
        },
        [handleLogin, login, navigate],
    );

    return {
        handleLoginSubmit,
        isPending,
    };
};
