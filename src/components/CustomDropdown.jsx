import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import './CustomDropdown.css';

const CustomDropdown = ({
    value,
    onChange,
    options,
    placeholder = 'Select an option',
    name,
    required = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt =>
        typeof opt === 'string' ? opt === value : opt.value === value
    );

    const getLabel = (option) => {
        return typeof option === 'string' ? option : option.label;
    };

    const getValue = (option) => {
        return typeof option === 'string' ? option : option.value;
    };

    return (
        <div className="custom-dropdown" ref={dropdownRef}>
            <input
                type="hidden"
                name={name}
                value={value}
                required={required}
            />
            <button
                type="button"
                className={`dropdown-trigger ${isOpen ? 'open' : ''} ${value ? 'has-value' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={selectedOption ? 'dropdown-value' : 'dropdown-placeholder'}>
                    {selectedOption ? getLabel(selectedOption) : placeholder}
                </span>
                <ChevronDown size={18} className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} />
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-menu-inner">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`dropdown-item ${value === getValue(option) ? 'selected' : ''}`}
                                onClick={() => {
                                    onChange({ target: { name, value: getValue(option) } });
                                    setIsOpen(false);
                                }}
                            >
                                <span>{getLabel(option)}</span>
                                {value === getValue(option) && <Check size={16} />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
