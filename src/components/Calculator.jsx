import "./Calculator.css"

function Calculator() {
    return <form id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Inisial Investasi</label>
                <input type="number"/>
            </p>
            <p>
                <label htmlFor="">Investasi Tahunan</label>
                <input type="number"/>
            </p>
        </div>
        
        <div className="input-group">
            <p>
                <label htmlFor="">Perkiraan balik modal</label>
                <input type="number"/>
            </p>
            <p>
                <label htmlFor="">Durasi</label>
                <input type="number"/>
            </p>
        </div>
    </form>
}

export default Calculator()