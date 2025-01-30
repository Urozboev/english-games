import "./style.css"

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">
                "English Games" © {new Date().getFullYear()}. Barcha huquqlar himoyalangan.
            </p>
            <p className="footer-text">
                Sayt yaratuvchisi: <a className="footer-link" href="https://t.me/MirjalolUrozboev">@MirjalolUrozboev</a>
            </p>
        </footer>
    )
}

export default Footer
