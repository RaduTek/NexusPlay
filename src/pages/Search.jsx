import { mdiMagnify } from "@mdi/js";
import Page from "../components/Layout/Page/Page";
import PageTitle from "../components/Layout/Page/PageTitle";

function Search() {
    return (
        <Page>
            <PageTitle icon={mdiMagnify}>Search</PageTitle>
        </Page>
    );
}

export default Search;
