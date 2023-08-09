
const useLocalStorage = (key) => {

    const addStorageItem = (value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        }
        catch (err){
            console.log(err)
        }
    }


    const getStorageItem = () => {

        try {
            let value = null;

            const restored = window.localStorage.getItem(key)
            if (restored) {
                value = JSON.parse(restored);
            }

            return value;
        }
        catch (err){
            console.log(err)
        }
    }

    const removeStorageItem = () => {
        try{
            window.localStorage.removeItem(key)
        }
        catch (err){
            console.log(err)
        }
    }

    return [addStorageItem, getStorageItem, removeStorageItem]

}

export default useLocalStorage;