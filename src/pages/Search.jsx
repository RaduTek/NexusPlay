import { mdiMagnify } from "@mdi/js";
import Page from "../components/Layout/Page/Page";
import PageTitle from "../components/Layout/Page/PageTitle";
import TextInput from "../components/UI/TextInput";

function Search() {
    return (
        <Page>
            <PageTitle icon={mdiMagnify}>Search</PageTitle>
            <section>
                <TextInput placeholder="Search" />
            </section>
        </Page>
    );
}

export default Search;
