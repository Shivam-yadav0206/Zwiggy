import { useEffect, useState } from "react"

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);


        addEventListener("online", handleOnline);
        addEventListener("offline", handleOffline);

        return () => {
            removeEventListener("online", handleOnline);
            removeEventListener("offline", handleOffline);
        }
    }, [])
    return isOnline;
}
export default useOnline;