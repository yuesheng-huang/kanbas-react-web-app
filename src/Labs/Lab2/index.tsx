import Dimensions from "./Dimensions";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import "./index.css";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Border from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIcons";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {
    return (
      <div id="container">
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <h3>Styling with the STYLE attribute</h3>
        <p>
          Style attribute allows configuring look and feel
          right on the element. Although it's very convenient
          it is considered bad practice and you should avoid
          using the style attribute
        </p>
        
        <br />
        <div id="wd-css-id-selectors">
            <h3>ID selectors</h3>
            <p id="wd-id-selector-1">Instead of changing the look and feel of all the 
                elements of the same name, e.g., P, we can refer to a specific element by its ID
            </p>
            <p id="wd-id-selector-2"> Here's another paragraph using a different ID and a different 
                look and feel
            </p>
        </div>

        <br />
        <div id="wd-css-class-selectors">
            <h3>Class selectors</h3>
            <p className="wd-class-selector">Instead of using IDs to refer to elements, you can use an 
                element's CLASS attribute
            </p>
            <h4 className="wd-class-selector"> This heading has same style as paragraph above</h4>
        </div>

        <br />
        <div id="wd-css-document-structure">
            <div className="wd-selector-1">
                <h3>Document structure selectors</h3>
                <div className="wd-selector-2">
                    Selectors can be combined to refer elements in particular
                    places in the document
                    <p className="wd-selector-3">
                        This paragraph's red background is referenced as
                        <br />
                        .selector-2 .selector3<br />
                        meaning the descendant of some ancestor.<br />
                        <span className="wd-selector-4">
                        Whereas this span is a direct child of its parent
                        </span><br />
                        You can combine these relationships to create specific 
                        styles depending on the document structure
                    </p>
                </div>
            </div>
        </div>

        <br />
        <div id="wd-css-colors">
            <ForegroundColors />
        </div>

        <br />
        <div id="wd-css-background-colors">
            <BackgroundColors />
        </div>

        <br />
        <div>
            <Border />
        </div>

        <br />
        <div>
            <Padding />
        </div>
        
        <br />
        <div>
            <Margins />
        </div>

        <br />
        <div>
            <Corners />
        </div>

        <br />
        <div>
            <h1 style={{backgroundColor: "yellow"}}>
            Block vs inline elements
            </h1>
            <p style={{ margin: "10px", backgroundColor: "blue", color:"white"}}>
            Headings ... width</p>
            Normal text renders inline
            <br/><br/>
            <span style={{backgroundColor: "red", color: "white", borderStyle: "solid",
            borderWidth: "10px", borderColor: "green"}}>Span elements </span>
            <span style={{backgroundColor: "red", color:"white", border: "solid 10px green" }}>render inline </span>
            with the rest of the content
        </div>

        <br />
        <div>
            <Dimensions />
        </div>

        <br />
        <div>
            <Positions />
        </div>

        <br />
        <div>
            <Zindex />
        </div>

        <br />
        <div>
            <Float />
        </div>

        <br />
        <div>
            <GridLayout />
        </div>

        <br />
        <div>
            <Flex />
        </div>

        <br />
        <div>
            <ReactIconsSampler />
        </div>
        
        <br />
        <div>
            <BootstrapGrids />
        </div>

        <br />
        <div>
            <ScreenSizeLabel />
        </div>
        
        <br />
        <div>
            <BootstrapTables />
        </div>

        <br />
        <div>
            <BootstrapLists />
        </div>
        
        <br />
        <div>
            <BootstrapForms />
        </div>

        <br />
        <div>
            <BootstrapNavigation />
        </div>

      </div>
    );
}