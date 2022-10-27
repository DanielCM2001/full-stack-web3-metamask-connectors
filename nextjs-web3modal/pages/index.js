import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

let web3Modal;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: { 5: process.env.NEXT_PUBLIC_RPC_URL },
    },
  },
};

export default function Home() {
  async function connect() {
    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions, //required
    });
    const web3ModalProvider = await web3Modal.connect();
  }

  return (
    <div>
      <button onClick={() => connect()}>connect</button>
    </div>
  );
}
