export default function BootstrapTables(){
    return(
        <div id="wd-css-styling-tables">
            <h2>Tables</h2>
            <table className="table">
                <thead>
                <tr className="table-dark"><th>Quiz</th><th>Topic</th><th>Date</th><th>Grade</th></tr>
                </thead>
                <tbody>
                <tr className="table-warning"><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
                <tr className="table-danger"><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
                <tr className="table-primary"><td>Q3</td><td>JavaScript</td><td>2/17/21</td><td>95</td></tr>
                <tr className="table-warning"><td>Q4</td><td>Node.js</td><td>2/24/21</td><td>95</td></tr>
                <tr className="table-danger"><td>Q5</td><td>React.js</td><td>3/3/21</td><td>90</td></tr>
                <tr className="table-primary"><td>Q6</td><td>Bootstrap</td><td>3/10/21</td><td>85</td></tr>
                <tr className="table-warning"><td>Q7</td><td>Hooks</td><td>3/17/21</td><td>70</td></tr>
                <tr className="table-danger"><td>Q8</td><td>Redux</td><td>3/24/21</td><td>100</td></tr>
                <tr className="table-primary"><td>Q9</td><td>APIs</td><td>3/31/21</td><td>100</td></tr>
                <tr className="table-warning"><td>Q10</td><td>Server</td><td>4/7/21</td><td>90</td></tr>
                </tbody>
                <tfoot>
                <tr className="table-success"><td colSpan={3}>Average</td><td>90</td></tr>
                </tfoot>
            </table>
            
            <br />
            <div id="wd-css-responsive-tables">
                <h2>Responsive tables</h2>
                <div className="table-responsive">
                    <table className="table">
                    <thead>
                        <tr><th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                            <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                            <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                        <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                        <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}