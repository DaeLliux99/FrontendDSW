﻿using BusVidAPI.Modelos.Core;
using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Text;
namespace BusVidAPI.AccesoDatos.Core
{
    public class  PasajeroDA
    {
        string conf = "Server=localhost;Database=busVidDB;User Id=sa;Password='qwerQWER1234!';";

        public Pasajero InsertarPasajero(Pasajero pasajero)
        {
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paPasajero_Insertar", conexion))
                {
                    comando.CommandType = System.Data.CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@dni", pasajero.Dni);
                    comando.Parameters.AddWithValue("@nombre", pasajero.Nombre);
                    comando.Parameters.AddWithValue("@apellidos", pasajero.Apellidos);
                    conexion.Open();
                    pasajero.Id = Convert.ToInt32(comando.ExecuteScalar());
                    conexion.Close();
                }
            }
            return pasajero;
        }
    }
}
