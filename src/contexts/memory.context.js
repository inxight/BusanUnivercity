
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const MemoryContext = createContext({});

const MemoryContextProvider = ({ children }) => {
    const [ lang, setLang ] = useState('kor');

	return (
		<MemoryContext.Provider  
			value={{    
                lang,
                setLang,
			}}
		>
			{children} 
		</MemoryContext.Provider>
	);
};

export {
	MemoryContext,
	MemoryContextProvider
};