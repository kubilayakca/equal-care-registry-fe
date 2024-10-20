'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Icon } from '@/components/icon';
import { Link, usePathname } from '@/navigation';
import {
  CERTIFICATE_TYPE_ICON_MAPPING,
  CERTIFICATION_TYPES,
  ROUTES,
} from '@/utils/constants';
import Image from 'next/image';

interface ArrowProps {
  disabled?: boolean;
  onClick: () => void;
}

const NextArrow = ({ onClick, disabled }: ArrowProps) => (
  <button
    className={`categories__arrow-right hidden lg:inline-flex p-5 ${
      disabled ? 'opacity-20' : ''
    }`}
    disabled={disabled}
    onClick={onClick}
    aria-label='next'
  >
    <Icon type='arrow-right' />
  </button>
);

const PrevArrow = ({ onClick, disabled }: ArrowProps) => (
  <button
    className={`categories__arrow-left hidden lg:inline-flex p-5 ${
      disabled ? 'opacity-20' : ''
    }`}
    disabled={disabled}
    onClick={onClick}
    aria-label='prev'
  >
    <Icon type='arrow-left' />
  </button>
);

const ITEMS = [
  {
    type: CERTIFICATION_TYPES.medication,
    label: 'certification_type_medication',
    href: ROUTES.certificateTypeMedication,
  },
  {
    type: CERTIFICATION_TYPES.diagnosticTreatment,
    label: 'certification_type_diagnostic_treatment',
    href: ROUTES.certificateTypeDiagnosticTreatment,
  },
  {
    type: CERTIFICATION_TYPES.digitalDiagnosticTreatment,
    label: 'certification_type_digital_diagnostic_treatment',
    href: ROUTES.certificateTypeDigitalDiagnosticTreatment,
  },
  {
    type: CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment,
    label: 'certification_type_ai_supported_diagnostic_treatment',
    href: ROUTES.certificateTypeAiSupportedDiagnosticTreatment,
  },
  {
    type: CERTIFICATION_TYPES.femaleTech,
    label: 'certification_type_femaletech',
    href: ROUTES.certificateTypeFemaleTech,
  },
  {
    type: CERTIFICATION_TYPES.maleTech,
    label: 'certification_type_maletech',
    href: ROUTES.certificateTypeMaleTech,
  },
];

export const TypesSwiper = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(
    null
  );

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: true,
  });

  const onClickLeft = () => {
    controlledSwiper?.slideTo(controlledSwiper?.realIndex - 2);
  };

  const onClickRight = () => {
    controlledSwiper?.slideTo(controlledSwiper?.realIndex + 2);
  };

  useEffect(() => {
    if (controlledSwiper) {
      const index = ITEMS.findIndex((item) => item.href === pathname);
      if (index > -1) {
        controlledSwiper.slideTo(index, 0);
      }
      setSlideConfig({
        isBeginning: index === 0,
        isEnd: index === ITEMS.length - 1,
      });
    }
  }, [controlledSwiper, pathname]);

  return (
    <div className='flex'>
      <PrevArrow onClick={onClickLeft} disabled={slideConfig?.isBeginning} />
      <Swiper
        className='carousel'
        wrapperClass='categories__inner-carousel grow '
        slidesPerView='auto'
        touchReleaseOnEdges
        edgeSwipeThreshold={20}
        edgeSwipeDetection='prevent'
        observer
        observeParents
        centeredSlidesBounds
        onSwiper={setControlledSwiper}
        onSlideChange={(s) => {
          setSlideConfig({ isBeginning: s.isBeginning, isEnd: s.isEnd });
        }}
        onToEdge={(s) => {
          setSlideConfig({ isBeginning: s.isBeginning, isEnd: s.isEnd });
        }}
      >
        {ITEMS.map((item) => {
          return (
            <SwiperSlide key={item.type}>
              <Item
                href={item.href}
                type={item.type}
                label={t(item.label)}
                selected={pathname === item.href}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <NextArrow onClick={onClickRight} disabled={slideConfig?.isEnd} />
    </div>
  );
};

const Item = ({
  type,
  href,
  label,
  selected,
}: {
  type: string;
  href: string;
  label: string;
  selected?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`rounded-xl px-6 py-3 border flex gap-3 body-l-500 items-center mr-4 ${
        selected
          ? 'bg-blue-2 border-blue-2 text-white'
          : 'border-green-400 text-blue-2'
      }`}
    >
      <Image
        src={`/icons/${CERTIFICATE_TYPE_ICON_MAPPING[type]}-${
          selected ? 'light' : 'dark'
        }.svg`}
        alt=''
        width={type === CERTIFICATION_TYPES.maleTech ? 40 : 26}
        height={40}
        priority
      />
      {label}
    </Link>
  );
};
