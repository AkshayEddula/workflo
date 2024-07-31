import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

type DataType = {
    username: string,
    email: string,
    password: string,
};

type DataType2 = {
    email: string,
    password: string,
};

type UserInfo = {
    id: string,
    name: string,
};

type TaskDetails = {
    title: string,
    status: string,
    priority: string,
    deadline: Date,
    description: string,
    content: string,
    author: string,
};

interface contextProps {
    isAuthenticated: boolean,
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
    signupData: DataType;
    setSignupData: Dispatch<SetStateAction<DataType>>,
    loginData: DataType2;
    setLoginData: Dispatch<SetStateAction<DataType2>>,
    userInfo: UserInfo,
    setUserInfo: Dispatch<SetStateAction<UserInfo>>,
    taskDetails: TaskDetails,
    setTaskDetails: Dispatch<SetStateAction<TaskDetails>>
}

const GlobalContext = createContext<contextProps>({
    isAuthenticated: false,
    setIsAuthenticated: () => false,
    isModalOpen: false,
    setIsModalOpen: () => false,
    signupData: {
        username: '',
        email: '',
        password: '',
    },
    setSignupData: () => {},
    loginData: {
        email: '',
        password: '',
    },
    setLoginData: () => {},
    userInfo: {
        id: '',
        name: '',
    },
    setUserInfo: () => {},
    taskDetails: {
        title: '',
        status: '',
        priority: '',
        deadline: new Date(),
        description: '',
        content: '',
        author: '',
    },
    setTaskDetails: () => {},
});

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [userInfo, setUserInfo] = useState({
        id: '',
        name: '',
    });
    const [taskDetails, setTaskDetails] = useState({
        title: '',
        status: '',
        priority: '',
        deadline: new Date(),
        description: '',
        content: '',
        author: '',
    });

    return (
        <GlobalContext.Provider value={{ taskDetails, setTaskDetails, userInfo, setUserInfo, isAuthenticated, signupData, setSignupData, loginData, setLoginData, setIsAuthenticated, isModalOpen, setIsModalOpen }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
