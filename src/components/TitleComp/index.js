import appConfig from '../../../config.json'

const TitleComp = (props) => {

    const Tag = props.tag || 'h1'

    return (
        <>
            <Tag>{props.children}</Tag>

            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['050']};
                margin: 16px auto;
                text-align: center;
            }
            `}</style>
        </>
    )
}

export default TitleComp