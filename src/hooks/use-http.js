import {useCallback, useState} from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const getUserIP = useCallback( async () => {
        // todo: modify loading state before returning data
        setIsLoading(true);
        try{
            const response = await fetch(`https://api.ipify.org?format=json`, {headers: {'Content-Type': 'text/plain'}});
            if(!response.ok){
                throw new Error('Request failed with status code: ' + response.status);
            }
            const data = await response.json();
            return data
        }catch (e) {
            console.error(e.message || 'Something went wrong!')
        }
        setIsLoading(false);
    }, [])
    const getIP = useCallback(async ({ipAddr, domain}) => {
        setIsLoading(true);
        try{
            const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_bHub2hnJxZ4JjZWHKJ10tdj7WLQOh&ipAddress=${ipAddr}&domain=${domain}`);
            if(!response.ok){
                throw new Error('Request failed with status code: ' + response.status);
            }
            const data = await response.json()
            return data;
        }catch (e) {
            console.error(e.message || 'Something went wrong!')
        }
        finally {
            setIsLoading(false);
        }


    }, []);
    return {
        isLoading,
        getIP,
        getUserIP
    }}
export default useHttp;