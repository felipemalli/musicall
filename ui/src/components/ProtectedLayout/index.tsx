import { useAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = ({children, pageProtected}: { children: JSX.Element, pageProtected: boolean}) => {
  const auth = useAuth()

  if (!auth.email && pageProtected) {
    return <h1>{`You don't have acess`}</h1>
  }

  return children
}