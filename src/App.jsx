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
      weaponSet: 'oneHand',
      twoWeaponFightingFeat: false,
      offhandLight: false,
      improvedTwoWeaponFightingFeat: false,
      greaterTwoWeaponFightingFeat: false
    }
  });
  const flexCss = "flex flex-col lg:flex-row xl:flex-row";
  const spaceCss ="lg:space-x-2 xl:space-x2"
  return (
    <div className="App">
      <div className="container mx-auto">
        <h1 className="text-gray-800 text-3xl mb-3">Pathfinder 1e Attack Calculator</h1>
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
    </div>
  );
}

export default App;
