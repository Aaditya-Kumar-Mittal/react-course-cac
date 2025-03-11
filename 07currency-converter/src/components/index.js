// We bring all the components here and export the components from here and access all the components from this file
// The advantage of this is that we can import only the components we need and not all the components in the file
// Also the imports are lazy loaded so that the components are not loaded until they are needed and thus improving the performance with optimization

import InputBox from "./InputBox";

export { InputBox };