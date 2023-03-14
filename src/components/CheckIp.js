import { useEffect, useRef } from "react";
import axios from 'axios';

export default function CheckIp() {
  const ipAdded = useRef(false);

  function addIp(ipData){
    fetch(
        'https://my-portfolio-e0fd3-default-rtdb.firebaseio.com/ips-julie.json',
        {
            method: 'POST',
            body: JSON.stringify(ipData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )  
    
  }

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')

    let myIp = "142.184.85.102";
    let ip = res.data.IPv4;
    if(ip===myIp) ip = "My notebook";

    const ipData = {
      ip: ip,
      country: res.data.country_name,
      city: res.data.city,
      state: res.data.state,
      time: Date(),
    }

    if(!ipAdded.current) addIp(ipData);
    ipAdded.current = true;

    


  }
    
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData();

  }, []) 

}