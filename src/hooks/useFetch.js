import abi from '../abi/MicroTaskAbi.json'
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const useFetch = (contractFunction, ...args) => {
  const [tasks, setTasks] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const contractAddress = '0xfcDf4673d9BD57DD25f8BCdCCa9a19ae60AA5e66'

  useEffect(() => {
    async function fetchData() {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        const allTasks = await contract[contractFunction](...args);

        setTasks(allTasks);
        setIsPending(false)
        setError(null)
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setError(error.message)
        setIsPending(false)
      }
    }
    fetchData()
  }, [contractFunction, args]);

  return {tasks, isPending, error}
};

export default useFetch;
