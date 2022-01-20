import type { NextPage } from "next";

import PageWrapper from "../src/components/Layout/PageWrapper";

import Drill from "../src/components/Drill/Drill";

const Home: NextPage = () => {
    return (
        <PageWrapper>
            <Drill />
        </PageWrapper>
    );
};

export default Home;
