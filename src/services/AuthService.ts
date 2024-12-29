import Api from "./Api";

interface AuthenticationResult {
  acessToken: string;
  message: string;
}

export const LoginService = async (
  userName: string,
  password: string
): Promise<AuthenticationResult> => {
  try {
    const response = await Api.post<AuthenticationResult>("/auth/login", {
      userName,
      password,
    });

    localStorage.setItem("token", response.data.acessToken);
    return response.data; // Return the response data
  } catch {
    return {
      acessToken: "",
      message: "Falha ao realizar o login. Verifique usuário e senha.",
    };
  }
};

export const Signup = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<AuthenticationResult> => {
  try {
    const response = await Api.post<AuthenticationResult>("/auth/signup", {
      email,
      password,
      firstName,
      lastName,
      userName: firstName,
    });

    localStorage.setItem("token", response.data.acessToken);

    return response.data; // Return the AuthenticationResult data
  } catch {
    throw new Error("Network Error ");
  }
};
