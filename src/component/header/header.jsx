
import { Component } from "react";
import './header.css'


class Header extends Component {
    render() {
        return (
            <body>
                <div className="header">
                    <div className='left'>
                        <a href='#' className='logo'>
                            <h1>EDYODA</h1>
                            <span>Stories</span>
                        </a>
                        <p className="explore">Explore Categories<span><img id="drop-down" class="BlogNavigationLink__DropdownArrow__2Uzyk" alt="Dropdown Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" />
                        </span></p>
                    </div>
                    <div className='right'>
                        <p className="heading-text"> EdYoda is free learning and knowledge<br />
                            sharing platform for techies</p>
                        <a href="">Go to Main Website</a>
                    </div>
                </div>
            </body>
        )

    }

}

export default Header;
