import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "react-native-storage";

const storage=new Storage({
    size:1000,
    defaultExpires:1000*3600*24,
    storageBackend:AsyncStorage,
   enableCache:false}
)
export default storage