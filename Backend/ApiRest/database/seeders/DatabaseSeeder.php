<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\User;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Product::Create([
            'NombreProducto' => 'Vitamita C Caja Con 10 Tiras De Tabletass Masticables c/u - Sabor Mandarina',
            'Precio' => 49.955,
            'Iva' => 5,
            'CantidadProducto' => 50,
            'UrlImg' => '..\..\Sources\vitamina C.jpg'
        ]);
        Product::Create([
            'NombreProducto' => 'Ibuprofeno + Metocarbamol 200\500 mg Caja Con 30 Tabletas Recubiertas',
            'Precio' => 30.455,
            'Iva' => 6,
            'CantidadProducto' => 100,
            'UrlImg' => '..\..\Sources\iboprufeno.jpg'
        ]);
        Product::Create([
            'NombreProducto' => 'Noxpirin Plus Caja Con 12 Cápsulas COL',
            'Precio' => 12.475,
            'Iva' => 3,
            'CantidadProducto' => 75,
            'UrlImg' => '..\..\Sources\noxpirin.jpg'
        ]);
        Product::Create([
            'NombreProducto' => 'Sal De Frutas Lua Plus Polvo Citrus Caja Con 6 Sobres',
            'Precio' => 16.155,
            'Iva' => 7,
            'CantidadProducto' => 25,
            'UrlImg' => '..\..\Sources\sal de frutas lua.jpg'
        ]);
        User::Create([
            'PrimerNombre' => 'Bryan',
            'PrimerApellido' => 'Vanegas',
            'email' => 'bryan@hotmail.com',
            'password' =>  '12345',
            'Calle' => 35,
            'Carrera' => 33,
            'Numero' =>"32-85"
        ]);
    }
}
