Default
        
    <FlickerText>
        <h3>Hello!</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </FlickerText>
    
Custom Characters

    const alternativeChars = "!\"#$%'()*+,-./0123456789:;?@`aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ{[|\}]~^_";
    <FlickerText characters={alternativeChars}>
        <h3>Hello!</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </FlickerText>
    
Different Range

    <FlickerText max={100}>
        <h3>Hello!</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </FlickerText>
