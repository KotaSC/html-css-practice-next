import Head from "next/head";
import Meta from "@/components/Meta/Meta";
import Container from "@/components/Container/Container";
import Posts from "@/components/Posts/Posts";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Meta />
      <Container>
        <Posts />
        <Sidebar />
      </Container>
    </>
  );
}
