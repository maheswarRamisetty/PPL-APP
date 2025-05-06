'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterSection = ({ title, children, isOpen = true }) => {
  const [expanded, setExpanded] = useState(isOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-medium text-sm">{title}</h3>
        {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      {expanded && (
        <div className="mt-3 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

const FilterCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input 
        type="checkbox" 
        id={id} 
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 border-gray-300 rounded"
      />
      <label htmlFor={id} className="ml-2 text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
};

const FilterSidebar = ({ filters = {}, onFilterChange = () => {} }) => {
  // Add default empty function for onFilterChange to prevent errors
  const handleFilterChange = (key, value) => {
    if (typeof onFilterChange === 'function') {
      onFilterChange(key, value);
    }
  };

  return (
    <div className="bg-white w-full">
      <div className="mb-6">
        <FilterCheckbox 
          id="customizable" 
          label="CUSTOMIZABLE" 
          checked={filters?.customizable || false}
          onChange={() => handleFilterChange('customizable', !filters?.customizable)}
        />
      </div>

      <FilterSection title="IDEAL FOR">
        <div className="text-sm text-gray-500 mb-2">All</div>
        <FilterCheckbox 
          id="men" 
          label="Men" 
          checked={filters?.idealFor?.men || false}
          onChange={() => handleFilterChange('idealFor', { ...(filters?.idealFor || {}), men: !(filters?.idealFor?.men) })}
        />
        <FilterCheckbox 
          id="women" 
          label="Women" 
          checked={filters?.idealFor?.women || false}
          onChange={() => handleFilterChange('idealFor', { ...(filters?.idealFor || {}), women: !(filters?.idealFor?.women) })}
        />
        <FilterCheckbox 
          id="baby-kids" 
          label="Baby & Kids" 
          checked={filters?.idealFor?.kids || false}
          onChange={() => handleFilterChange('idealFor', { ...(filters?.idealFor || {}), kids: !(filters?.idealFor?.kids) })}
        />
      </FilterSection>

      <FilterSection title="OCCASION">
        <div className="text-sm text-gray-500 mb-2">All</div>
        <FilterCheckbox 
          id="casual" 
          label="Casual" 
          checked={filters?.occasion?.casual || false}
          onChange={() => handleFilterChange('occasion', { ...(filters?.occasion || {}), casual: !(filters?.occasion?.casual) })}
        />
        <FilterCheckbox 
          id="formal" 
          label="Formal" 
          checked={filters?.occasion?.formal || false}
          onChange={() => handleFilterChange('occasion', { ...(filters?.occasion || {}), formal: !(filters?.occasion?.formal) })}
        />
        <FilterCheckbox 
          id="party" 
          label="Party" 
          checked={filters?.occasion?.party || false}
          onChange={() => handleFilterChange('occasion', { ...(filters?.occasion || {}), party: !(filters?.occasion?.party) })}
        />
        <FilterCheckbox 
          id="wedding" 
          label="Wedding" 
          checked={filters?.occasion?.wedding || false}
          onChange={() => handleFilterChange('occasion', { ...(filters?.occasion || {}), wedding: !(filters?.occasion?.wedding) })}
        />
        <FilterCheckbox 
          id="festival" 
          label="Festival" 
          checked={filters?.occasion?.festival || false}
          onChange={() => handleFilterChange('occasion', { ...(filters?.occasion || {}), festival: !(filters?.occasion?.festival) })}
        />
        <FilterCheckbox 
          id="sports" 
          label="Sports" 
          checked={filters?.occasion?.sports || false}
          onChange={() => handleFilterChange('occasion', { ...(filters?.occasion || {}), sports: !(filters?.occasion?.sports) })}
        />
      </FilterSection>

      <FilterSection title="WORK">
        <div className="text-sm text-gray-500 mb-2">All</div>
        <FilterCheckbox 
          id="office" 
          label="Office" 
          checked={filters?.work?.office || false}
          onChange={() => handleFilterChange('work', { ...(filters?.work || {}), office: !(filters?.work?.office) })}
        />
        <FilterCheckbox 
          id="business" 
          label="Business" 
          checked={filters?.work?.business || false}
          onChange={() => handleFilterChange('work', { ...(filters?.work || {}), business: !(filters?.work?.business) })}
        />
        <FilterCheckbox 
          id="outdoor" 
          label="Outdoor" 
          checked={filters?.work?.outdoor || false}
          onChange={() => handleFilterChange('work', { ...(filters?.work || {}), outdoor: !(filters?.work?.outdoor) })}
        />
        <FilterCheckbox 
          id="creative" 
          label="Creative" 
          checked={filters?.work?.creative || false}
          onChange={() => handleFilterChange('work', { ...(filters?.work || {}), creative: !(filters?.work?.creative) })}
        />
        <FilterCheckbox 
          id="casual-work" 
          label="Casual Work" 
          checked={filters?.work?.casualWork || false}
          onChange={() => handleFilterChange('work', { ...(filters?.work || {}), casualWork: !(filters?.work?.casualWork) })}
        />
      </FilterSection>

      <FilterSection title="FABRIC">
        <div className="text-sm text-gray-500 mb-2">All</div>
        <FilterCheckbox 
          id="cotton" 
          label="Cotton" 
          checked={filters?.fabric?.cotton || false}
          onChange={() => handleFilterChange('fabric', { ...(filters?.fabric || {}), cotton: !(filters?.fabric?.cotton) })}
        />
        <FilterCheckbox 
          id="polyester" 
          label="Polyester" 
          checked={filters?.fabric?.polyester || false}
          onChange={() => handleFilterChange('fabric', { ...(filters?.fabric || {}), polyester: !(filters?.fabric?.polyester) })}
        />
        <FilterCheckbox 
          id="silk" 
          label="Silk" 
          checked={filters?.fabric?.silk || false}
          onChange={() => handleFilterChange('fabric', { ...(filters?.fabric || {}), silk: !(filters?.fabric?.silk) })}
        />
        <FilterCheckbox 
          id="wool" 
          label="Wool" 
          checked={filters?.fabric?.wool || false}
          onChange={() => handleFilterChange('fabric', { ...(filters?.fabric || {}), wool: !(filters?.fabric?.wool) })}
        />
        <FilterCheckbox 
          id="linen" 
          label="Linen" 
          checked={filters?.fabric?.linen || false}
          onChange={() => handleFilterChange('fabric', { ...(filters?.fabric || {}), linen: !(filters?.fabric?.linen) })}
        />
        <FilterCheckbox 
          id="denim" 
          label="Denim" 
          checked={filters?.fabric?.denim || false}
          onChange={() => handleFilterChange('fabric', { ...(filters?.fabric || {}), denim: !(filters?.fabric?.denim) })}
        />
        <FilterCheckbox 
          id="leather" 
          label="Leather" 
          checked={filters?.fabric?.leather || false}
          onChange={() => handleFilterChange('fabric', { ...(filters?.fabric || {}), leather: !(filters?.fabric?.leather) })}
        />
        <FilterCheckbox 
          id="satin" 
          label="Satin" 
          checked={filters?.fabric?.satin || false}
          onChange={() => handleFilterChange('fabric', { ...(filters?.fabric || {}), satin: !(filters?.fabric?.satin) })}
        />
      </FilterSection>

      {/* Similar pattern for remaining sections */}
      <FilterSection title="SEGMENT">
        <div className="text-sm text-gray-500 mb-2">All</div>
        <FilterCheckbox 
          id="luxury" 
          label="Luxury" 
          checked={filters?.segment?.luxury || false}
          onChange={() => handleFilterChange('segment', { ...(filters?.segment || {}), luxury: !(filters?.segment?.luxury) })}
        />
        <FilterCheckbox 
          id="premium" 
          label="Premium" 
          checked={filters?.segment?.premium || false}
          onChange={() => handleFilterChange('segment', { ...(filters?.segment || {}), premium: !(filters?.segment?.premium) })}
        />
        <FilterCheckbox 
          id="mainstream" 
          label="Mainstream" 
          checked={filters?.segment?.mainstream || false}
          onChange={() => handleFilterChange('segment', { ...(filters?.segment || {}), mainstream: !(filters?.segment?.mainstream) })}
        />
        <FilterCheckbox 
          id="budget" 
          label="Budget" 
          checked={filters?.segment?.budget || false}
          onChange={() => handleFilterChange('segment', { ...(filters?.segment || {}), budget: !(filters?.segment?.budget) })}
        />
        <FilterCheckbox 
          id="designer" 
          label="Designer" 
          checked={filters?.segment?.designer || false}
          onChange={() => handleFilterChange('segment', { ...(filters?.segment || {}), designer: !(filters?.segment?.designer) })}
        />
      </FilterSection>

      <FilterSection title="SUITABLE FOR">
        <div className="text-sm text-gray-500 mb-2">All</div>
        <FilterCheckbox 
          id="everyday" 
          label="Everyday Wear" 
          checked={filters?.suitableFor?.everyday || false}
          onChange={() => handleFilterChange('suitableFor', { ...(filters?.suitableFor || {}), everyday: !(filters?.suitableFor?.everyday) })}
        />
        <FilterCheckbox 
          id="summer" 
          label="Summer" 
          checked={filters?.suitableFor?.summer || false}
          onChange={() => handleFilterChange('suitableFor', { ...(filters?.suitableFor || {}), summer: !(filters?.suitableFor?.summer) })}
        />
        <FilterCheckbox 
          id="winter" 
          label="Winter" 
          checked={filters?.suitableFor?.winter || false}
          onChange={() => handleFilterChange('suitableFor', { ...(filters?.suitableFor || {}), winter: !(filters?.suitableFor?.winter) })}
        />
        <FilterCheckbox 
          id="rainy" 
          label="Rainy Season" 
          checked={filters?.suitableFor?.rainy || false}
          onChange={() => handleFilterChange('suitableFor', { ...(filters?.suitableFor || {}), rainy: !(filters?.suitableFor?.rainy) })}
        />
        <FilterCheckbox 
          id="travel" 
          label="Travel" 
          checked={filters?.suitableFor?.travel || false}
          onChange={() => handleFilterChange('suitableFor', { ...(filters?.suitableFor || {}), travel: !(filters?.suitableFor?.travel) })}
        />
        <FilterCheckbox 
          id="beach" 
          label="Beach" 
          checked={filters?.suitableFor?.beach || false}
          onChange={() => handleFilterChange('suitableFor', { ...(filters?.suitableFor || {}), beach: !(filters?.suitableFor?.beach) })}
        />
        <FilterCheckbox 
          id="gym" 
          label="Gym & Fitness" 
          checked={filters?.suitableFor?.gym || false}
          onChange={() => handleFilterChange('suitableFor', { ...(filters?.suitableFor || {}), gym: !(filters?.suitableFor?.gym) })}
        />
      </FilterSection>

      <FilterSection title="RAW MATERIALS">
        <div className="text-sm text-gray-500 mb-2">All</div>
        <FilterCheckbox 
          id="natural" 
          label="Natural Fibers" 
          checked={filters?.rawMaterials?.natural || false}
          onChange={() => handleFilterChange('rawMaterials', { ...(filters?.rawMaterials || {}), natural: !(filters?.rawMaterials?.natural) })}
        />
        <FilterCheckbox 
          id="synthetic" 
          label="Synthetic Fibers" 
          checked={filters?.rawMaterials?.synthetic || false}
          onChange={() => handleFilterChange('rawMaterials', { ...(filters?.rawMaterials || {}), synthetic: !(filters?.rawMaterials?.synthetic) })}
        />
        <FilterCheckbox 
          id="recycled" 
          label="Recycled Materials" 
          checked={filters?.rawMaterials?.recycled || false}
          onChange={() => handleFilterChange('rawMaterials', { ...(filters?.rawMaterials || {}), recycled: !(filters?.rawMaterials?.recycled) })}
        />
        <FilterCheckbox 
          id="organic" 
          label="Organic Materials" 
          checked={filters?.rawMaterials?.organic || false}
          onChange={() => handleFilterChange('rawMaterials', { ...(filters?.rawMaterials || {}), organic: !(filters?.rawMaterials?.organic) })}
        />
        <FilterCheckbox 
          id="sustainable" 
          label="Sustainable Sources" 
          checked={filters?.rawMaterials?.sustainable || false}
          onChange={() => handleFilterChange('rawMaterials', { ...(filters?.rawMaterials || {}), sustainable: !(filters?.rawMaterials?.sustainable) })}
        />
      </FilterSection>

      <FilterSection title="PATTERN">
        <div className="text-sm text-gray-500 mb-2">All</div>
        <FilterCheckbox 
          id="solid" 
          label="Solid" 
          checked={filters?.pattern?.solid || false}
          onChange={() => handleFilterChange('pattern', { ...(filters?.pattern || {}), solid: !(filters?.pattern?.solid) })}
        />
        <FilterCheckbox 
          id="printed" 
          label="Printed" 
          checked={filters?.pattern?.printed || false}
          onChange={() => handleFilterChange('pattern', { ...(filters?.pattern || {}), printed: !(filters?.pattern?.printed) })}
        />
        <FilterCheckbox 
          id="striped" 
          label="Striped" 
          checked={filters?.pattern?.striped || false}
          onChange={() => handleFilterChange('pattern', { ...(filters?.pattern || {}), striped: !(filters?.pattern?.striped) })}
        />
        <FilterCheckbox 
          id="checkered" 
          label="Checkered" 
          checked={filters?.pattern?.checkered || false}
          onChange={() => handleFilterChange('pattern', { ...(filters?.pattern || {}), checkered: !(filters?.pattern?.checkered) })}
        />
        <FilterCheckbox 
          id="floral" 
          label="Floral" 
          checked={filters?.pattern?.floral || false}
          onChange={() => handleFilterChange('pattern', { ...(filters?.pattern || {}), floral: !(filters?.pattern?.floral) })}
        />
        <FilterCheckbox 
          id="graphic" 
          label="Graphic" 
          checked={filters?.pattern?.graphic || false}
          onChange={() => handleFilterChange('pattern', { ...(filters?.pattern || {}), graphic: !(filters?.pattern?.graphic) })}
        />
        <FilterCheckbox 
          id="polka" 
          label="Polka Dots" 
          checked={filters?.pattern?.polka || false}
          onChange={() => handleFilterChange('pattern', { ...(filters?.pattern || {}), polka: !(filters?.pattern?.polka) })}
        />
        <FilterCheckbox 
          id="animal" 
          label="Animal Print" 
          checked={filters?.pattern?.animal || false}
          onChange={() => handleFilterChange('pattern', { ...(filters?.pattern || {}), animal: !(filters?.pattern?.animal) })}
        />
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;