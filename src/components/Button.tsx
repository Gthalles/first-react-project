type ButtonProperties = {
    text: string;
    color: string;
}

export function Button (properties: ButtonProperties) {
    return (
            <button style={{ backgroundColor: properties.color, color: "white", border: "none", width: "100px", height: "50px" }}>
                { properties.text }
            </button>
    );
}