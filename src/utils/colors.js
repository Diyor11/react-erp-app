export const colors = {
    bleu: '#1890ff',
    green: '#95de64',
    red: '#ff4d4f',
    orange: '#ffa940',
    purple: '#722ed1',
    grey: '#595959',
    cyan: '#13c2c2',
    brown: '#614700',
    black: '#000'
} 

export const getColor = (colorName) => {
    return colors[colorName] || colors.black
}