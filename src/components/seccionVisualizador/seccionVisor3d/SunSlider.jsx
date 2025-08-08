
function SunSlider({ value, onChange }) {
    return (
        <div  className="sunSlider">
            
                <h3> Orientación solar </h3>
                <input
                    type="range"
                    min="0"
                    max="360"
                    value={value}
                    onChange={e => onChange(Number(e.target.value))}
                />
                <p>{value}°</p>
            
        </div>
    );
}

export default SunSlider;