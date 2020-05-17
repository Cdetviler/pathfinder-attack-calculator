import React from 'react';
import './tailwind.generated.css';
import './App.css';
import Controls from './components/Controls';
import Results from './components/Results';
import OffhandResults from './components/OffhandResults';
import { FormContext, useForm } from 'react-hook-form';

function App() {
  const methods = useForm({
    defaultValues: {
      baseAttackBonus: 0,
      weaponEnhancement: 0,
      abilityScore: 0,
      miscValue: 0,
      weaponSet: 'oneHand',
      twoWeaponFightingFeat: false,
      offhandLight: false,
      improvedTwoWeaponFightingFeat: false,
      greaterTwoWeaponFightingFeat: false
    }
  });
  const flexCss = "flex flex-col md:flex-row";
  const spaceCss ="lg:space-x-4 xl:space-x-4"
  return (
    <div className="App flex flex-col min-h-screen">
      <div className="container mx-auto flex-grow">
        <h1 className="text-gray-800 text-center md:text-left text-2xl md:text-3xl md:mb-3">Pathfinder 1e Attack Calculator</h1>
        <FormContext {...methods} >
          <form onSubmit={ () => { } }>
            <div className={`${flexCss} ${spaceCss}`}>
              <Controls />
              <div className="flex-grow p-2">
                <div className="flex flex-col space-y-4">
                  <Results />
                  <OffhandResults />
                </div>
              </div>
            </div>
          </form>
        </FormContext>
      </div>
      <div className="bg-gray-800 pt-10 pl-2 pr-2 pb-5">
        <div className="container mx-auto flex-grow">
          <span className="text-white">
            Author: <a className="underline" href="https://Charliedetviler.com">Charlie Detviler</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
