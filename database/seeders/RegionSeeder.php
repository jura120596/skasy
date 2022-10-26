<?php

namespace Database\Seeders;

use App\Models\Region;
use Illuminate\Database\Seeder;

class RegionSeeder extends Seeder
{
    private $regions = [
        11 => 'Республика Коми',
        21 => 'Республика Чувашия',
        24 => 'Красноярский край',
        89 => 'ЯНАО',
        86 => 'Ханты-Мансийский АР',
        72 => 'Тюменская область',
        74 => 'Челябинская',
        83 => 'Ненецкий',
        43 => 'Кировская',
        54 => 'Новосибирская',
        56 => 'Оренбургская',
        77 => 'Москва',
        2 => 'Башкортостан',
        67 => 'Смоленская',
        22 => 'Алтайский',
        55 => 'Омская',
        18 => 'Удмуртская',
        23 => 'Краснодарский',
        36 => 'Воронежская',
        5 => 'Дагестан',
        66 => 'Свердловская',
        42 => 'Кемеровская область - Кузбасс',
        64 => 'Саратовская',
        30 => 'Астраханская',
        34 => 'Волгоградская',
        48 => 'Липецкая',
        26 => 'Ставропольский',
        20 => 'Чеченская',
        9 => 'Карачаево-Черкесская',
        29 => 'Архангельская',
        1 => 'Адыгея',
        59 => 'Пермский',
        45 => 'Курганская',
        6 => 'Ингушетия',
        75 => 'Забайкальский',
        12 => 'Марий Эл',
        91 => 'Крым',
        44 => 'Костромская',
        70 => 'Томская',
        63 => 'Самарская',
        47 => 'Ленинградская',
        4 => 'Алтай',
        73 => 'Ульяновская',
        16 => 'Татарстан',
        52 => 'Нижегородская',
        15 => 'Северная Осетия - Алания',
        78 => 'Санкт-Петербург',
        61 => 'Ростовская',
        33 => 'Владимирская',
        71 => 'Тульская',
        31 => 'Белгородская',
        38 => 'Иркутская',
        58 => 'Пензенская',
        3 => 'Бурятия',
        19 => 'Хакасия',
        27 => 'Хабаровский',
        50 => 'Московская область',
        40 => 'Калужская область',
        87 => 'Чукотский автономный округ',
        28 => 'Амурская область',
        76 => 'Ярославская область',
        7 => 'Кабардино-Балкарская Республика',
        8 => 'Республика Калмыкия',
        10 => 'Республика Карелия',
        13 => 'Республика Мордовия',
        14 => 'Республика Саха (Якутия)',
        17 => 'Республика Тыва',
        25 => 'Приморский край',
        32 => 'Брянская область',
        35 => 'Вологодская область',
        37 => 'Ивановская область',
        39 => 'Калининградская область',
        41 => 'Камчатский край',
        46 => 'Курская область',
        49 => 'Магаданская область',
        51 => 'Мурманская область',
        53 => 'Новгородская область',
        57 => 'Орловская область',
        60 => 'Псковская область',
        62 => 'Рязанская область',
        65 => 'Сахалинская область',
        68 => 'Тамбовская область',
        69 => 'Тверская область',
        79 => 'Еврейская автономная область',
        92 => 'Севастополь',
        99 => 'Иные территории, включая город и космодром Байконур',
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $inserts = collect($this->regions)->reduce(function ($a, $b, $c) {
            $a[] = ['code' => str_pad($c.'', 2, '0', STR_PAD_LEFT), 'name' => $b, 'created_at' => now(), 'updated_at' => now()];
            return $a;
        }, []);
        Region::insert($inserts);
    }
}