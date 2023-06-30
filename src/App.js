import Navbar from "./components/Navbar/Navbar";
import AudioPlayer from "./components/Player/AudioPlayer";

function App() {
    document.title = "Music Player";
    return (
        <>
            <AudioPlayer />
            <Navbar />
        </>
    );
}

export default App;
