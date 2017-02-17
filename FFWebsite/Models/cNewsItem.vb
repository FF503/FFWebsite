﻿'   Class Name:      cNewsItem
'   Author:          Keith Moore     
'   Date:            November 2016 
'   Description:     The object contains the News Item Data Elements 
'   Change history:

Public Class cNewsItem
    'Private Data Definitions 
    Private m_ID As Long
    Private m_Post_date As Date
    Private m_Priority_ID As Long
    Private m_Author_ID As Long
    Private m_Category_ID As Long
    Private m_Status_ID As Long
    Private m_LastUpdate_Date As Date
    Private m_LastUpdate_ID As Long
    Private m_Approved_ID As Long
    Private m_Approved_Date As Date
    Private m_Image1_Name As String
    Private m_Image2_Name As String
    Private m_Image3_Name As String
    Private m_Title_text As String
    Private m_Body_text As String


    Public Property ID() As Long
        Get
            Return m_ID
        End Get
        Set(ByVal value As Long)
            m_ID = value
        End Set
    End Property

    Public Property Post_Date() As Date
        Get
            Return m_Post_date
        End Get
        Set(ByVal value As Date)
            m_Post_date = value
        End Set
    End Property

    Public Property Image1_Name() As String
        Get
            Return m_Image1_Name
        End Get
        Set(ByVal value As String)
            m_Image1_Name = value
        End Set
    End Property

    Public Property Image2_Name() As String
        Get
            Return m_Image2_Name
        End Get
        Set(ByVal value As String)
            m_Image2_Name = value
        End Set
    End Property

    Public Property Image3_Name() As String
        Get
            Return m_Image3_Name
        End Get
        Set(ByVal value As String)
            m_Image3_Name = value
        End Set
    End Property

    Public Property Priority_ID() As Long
        Get
            Return m_Priority_ID
        End Get
        Set(ByVal value As Long)
            m_Priority_ID = value
        End Set
    End Property

    Public Property Author_ID() As Long
        Get
            Return m_Author_ID
        End Get
        Set(ByVal value As Long)
            m_Author_ID = value
        End Set
    End Property

    Public Property Category_ID() As Long
        Get
            Return m_Category_ID
        End Get
        Set(ByVal value As Long)
            m_Category_ID = value
        End Set
    End Property

    Public Property Status_ID() As Long
        Get
            Return m_Status_ID
        End Get
        Set(ByVal value As Long)
            m_Status_ID = value
        End Set
    End Property

    Public Property Approved_ID() As Long
        Get
            Return m_Approved_ID
        End Get
        Set(ByVal value As Long)
            m_Approved_ID = value
        End Set
    End Property

    Public Property Approved_Date() As Date
        Get
            Return m_Approved_Date
        End Get
        Set(ByVal value As Date)
            m_Approved_Date = value
        End Set
    End Property

    Public Property LastUpdate_ID() As Long
        Get
            Return m_LastUpdate_ID
        End Get
        Set(ByVal value As Long)
            m_LastUpdate_ID = value
        End Set
    End Property

    Public Property LastUpdate_Date() As Date
        Get
            Return m_LastUpdate_Date
        End Get
        Set(ByVal value As Date)
            m_LastUpdate_Date = value
        End Set
    End Property

    Public Property Title_text() As String
        Get
            Return m_Title_text
        End Get
        Set(ByVal value As String)
            m_Title_text = value
        End Set
    End Property

    Public Property Body_text() As String
        Get
            Return m_Body_text
        End Get
        Set(ByVal value As String)
            m_Body_text = value
        End Set
    End Property
End Class
